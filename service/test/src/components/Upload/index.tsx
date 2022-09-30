import { OssUploadWithPreSignedUrl } from '@/services/oss/Oss';
import { LoadingOutlined, UploadOutlined } from '@ant-design/icons';
import { UploadProps, Upload, message, Image } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import React, { useMemo, useState } from 'react';

export type UploadFileProps = Omit<UploadProps, 'onChange'> & {
  value?: string;
  params?: any;
  onChange?: (value: string) => void;
  customVerification?: (file: any) => boolean | Promise<boolean>;
};

const uploadStyle: React.CSSProperties = {
  position: 'absolute',
  right: '-10rem',
  top: 0,
};

const UploadComp: React.FC<UploadFileProps> = ({
  children,
  onChange,
  value,
  params,
  customVerification,
  ...props
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const _props: UploadProps = {
    maxCount: 1,
    name: 'file',
    showUploadList: false,
    customRequest: async (info) => {
      const file = info.file as UploadFile;

      if (customVerification) {
        let rs = customVerification(file);
        if (rs instanceof Promise) rs = await rs;
        if (rs === false) return console.log('视频格式校验失败!');
      }

      try {
        setLoading(true);
        const thisParams = {
          bucket: 'smzx',
          object: `app_upgrade`,
          ...params,
        };
        const fileName = file.name.slice(0, file.name.lastIndexOf('.'));
        thisParams.object = `${thisParams.object}/${fileName}`;
        const { pre_signed_url, source_url } = await OssUploadWithPreSignedUrl(
          thisParams,
        );
        await fetch(pre_signed_url, { method: 'PUT', body: file as any });
        message.success('上传成功!');
        setLoading(false);
        onChange && onChange(source_url);
      } catch (error) {
        setLoading(false);
        message.error('上传失败!');
      }
    },
    ...props,
  };

  const isImg = useMemo(() => {
    return props.listType === 'picture-card';
  }, [props.listType]);

  const accept = useMemo(() => {
    if (props.accept) return props.accept;
    return isImg ? '.png,.jpg,.jpeg,.gif' : undefined;
  }, [isImg, props.accept]);

  const UploadButton = useMemo(() => {
    if (loading) {
      return <LoadingOutlined />;
    }

    if (children) {
      return children;
    }

    if (isImg) {
      return value ? <Image preview={false} src={value} /> : <UploadOutlined />;
    }

    const upload = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (loading) return;
      if (!value) e.preventDefault();
      e.stopPropagation();
    };

    return (
      <>
        <span className="relative">
          <UploadOutlined />
          {value && (
            <a href={value} style={uploadStyle} onClick={upload}>
              下载
            </a>
          )}
        </span>
      </>
    );
  }, [children, isImg, loading, value]);

  return (
    <Upload
      listType="picture-card"
      disabled={loading}
      accept={accept}
      {..._props}
    >
      {UploadButton}
    </Upload>
  );
};

export default UploadComp;

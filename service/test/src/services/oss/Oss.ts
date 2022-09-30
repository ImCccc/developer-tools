/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  OssDeleteSource = '/rpc/file-storage/Oss.DeleteSource',
  OssGetSource = '/rpc/file-storage/Oss.GetSource',
  OssGetSourceInfo = '/rpc/file-storage/Oss.GetSourceInfo',
  OssUploadFile = '/rpc/file-storage/Oss.UploadFile',
  OssUploadSource = '/rpc/file-storage/Oss.UploadSource',
  OssUploadWithPreSignedUrl = '/rpc/file-storage/Oss.UploadWithPreUrl',
}

/** 删除文件 POST /rpc/file-storage/Oss.DeleteSource */
export async function OssDeleteSource(
  body: API.ossDeleteSourceRequest,
  options?: { [key: string]: any },
) {
  return request<API.ossDeleteSourceResponse>(
    '/rpc/file-storage/Oss.DeleteSource',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 获取文件, 支持url以及id的获取方式 POST /rpc/file-storage/Oss.GetSource */
export async function OssGetSource(
  body: API.ossGetSourceRequest,
  options?: { [key: string]: any },
) {
  return request<API.ossGetSourceResponse>('/rpc/file-storage/Oss.GetSource', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取文件详情，支持url以及id的获取方式 POST /rpc/file-storage/Oss.GetSourceInfo */
export async function OssGetSourceInfo(
  body: API.ossGetSourceInfoRequest,
  options?: { [key: string]: any },
) {
  return request<API.ossGetSourceInfoResponse>(
    '/rpc/file-storage/Oss.GetSourceInfo',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 小文件上传可用(4MB以内), 直接把文件内容放在一次请求的内容体里，返回url的，兼容性，后续考虑去掉 POST /rpc/file-storage/Oss.UploadFile */
export async function OssUploadFile(
  body: API.ossUploadFileRequest,
  options?: { [key: string]: any },
) {
  return request<API.ossUploadFileResponse>(
    '/rpc/file-storage/Oss.UploadFile',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 小文件上传可用(4MB以内), 直接把文件内容放在一次请求的内容体里，返回资源id的 POST /rpc/file-storage/Oss.UploadSource */
export async function OssUploadSource(
  body: API.ossUploadSourceRequest,
  options?: { [key: string]: any },
) {
  return request<API.ossUploadSourceResponse>(
    '/rpc/file-storage/Oss.UploadSource',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 通过预签名url进行上传，需要前端做一定的minio代码适配。返回一个预签名url，前端把文件上传到此url去 POST /rpc/file-storage/Oss.UploadWithPreUrl */
export async function OssUploadWithPreSignedUrl(
  body: API.ossUploadWithPreSignedUrlRequest,
  options?: { [key: string]: any },
) {
  return request<API.ossUploadWithPreSignedUrlResponse>(
    '/rpc/file-storage/Oss.UploadWithPreSignedUrl',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

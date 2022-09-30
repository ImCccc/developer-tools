/* eslint-disable */

declare namespace API {
  type ossCODEDEF = 'OK' | 'FAILED';

  type ossDeleteSourceRequest = {
    /** 1. 资源id (也可传url, 服务会对http前缀的进行不同处理) */
    source_ids: string[];
  };

  type ossDeleteSourceResponse = {
    code: ossCODEDEF;
    /** 错误消息 */
    msg: string;
  };

  type ossGetSourceInfoRequest = {
    /** 资源id，兼容资源url */
    source_id: string;
  };

  type ossGetSourceInfoResponse = {
    /** TODO 还需要文件的大小，桶，对象名称等字段
桶 */
    bucket: string;
    code: ossCODEDEF;
    /** url过期时间 */
    expire_time: number;
    /** 错误消息 */
    msg: string;
    /** 文件对象/路由 */
    object: string;
    /** 文件大小 */
    size: number;
    /** 资源url，直接通过http的get请求可获取 */
    source_url: string;
  };

  type ossGetSourceRequest = {
    /** 资源id，兼容资源url */
    source_id: string;
  };

  type ossGetSourceResponse = {
    code: ossCODEDEF;
    /** url过期时间 */
    expire_time: number;
    /** 错误消息 */
    msg: string;
    /** 资源url，直接通过http的get请求可获取 */
    source_url: string;
  };

  type ossUploadFileRequest = {
    /** 桶，按照项目划分传不同的值 */
    bucket: string;
    /** 文件数据，http调用的话，要先经过base64转化 */
    data: string;
    /** 文件名，格式：xx/xx/xx.jpg，后端不校验唯一性，建议增加时间戳和随机数，如 xx/16453153/456/xx.jpg */
    object: string;
  };

  type ossUploadFileResponse = {
    code: ossCODEDEF;
    /** 错误消息 */
    msg: string;
    /** 上传文件返回的url */
    object_url: string;
  };

  type ossUploadSourceRequest = {
    /** 桶，按照项目划分传不同的值 */
    bucket: string;
    /** 文件数据，http调用的话，要先经过base64转化 */
    data: string;
    /** 文件名，格式：xx/xx/xx.jpg，后端不校验唯一性，建议增加时间戳和随机数，如 xx/16453153/456/xx.jpg */
    object: string;
  };

  type ossUploadSourceResponse = {
    code: ossCODEDEF;
    /** 错误消息 */
    msg: string;
    /** 上传资源返回的资源id */
    source_id: string;
  };

  type ossUploadWithPreSignedUrlRequest = {
    /** 桶，按照项目划分传不同的值 */
    bucket: string;
    /** 文件名，格式：xx/xx/xx.jpg，后端不校验唯一性，建议增加时间戳和随机数，如 xx/16453153/456/xx.jpg */
    object: string;
  };

  type ossUploadWithPreSignedUrlResponse = {
    code: ossCODEDEF;
    /** 错误消息 */
    msg: string;
    /** 返回预签名url */
    pre_signed_url: string;
    source_url: string;
  };
}

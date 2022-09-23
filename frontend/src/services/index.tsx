import request from './request';

export async function addPage(params: any) {
  return request<any>('/add-page/table', params);
}

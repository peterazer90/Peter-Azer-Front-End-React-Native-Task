import { HEADERS } from './CONFIG';

/// Post Method ////////////////////////////////////////////////////////////////////////////////////
export async function POST_METHOD(url: string, body: object) {
  const response = await fetch(url, {
    method: 'POST',
    headers: <any> HEADERS,
    body: JSON.stringify(body),
  });
  return response.json();
}

/// Get Method /////////////////////////////////////////////////////////////////////////////////////
export async function GET_METHOD(url: string) {
  const response = await fetch(url, {
    method: 'GET',
    headers: <any> HEADERS,
  });
  return response.json();
}

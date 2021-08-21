import { mockResponse } from "./response";

export const searchMock = (
  input: RequestInfo,
  init?: RequestInit | undefined
): Promise<Response> =>
  new Promise((resolve) =>
    resolve({
      json: () => Promise.resolve(mockResponse),
    } as Response)
  );
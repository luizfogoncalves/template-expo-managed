import { AxiosResponse } from 'axios';
import api from '../api';
import { getBaseUrl } from '../urlManager';

interface Check {
  ok: string
}

export const UserAPI = {
  healthCheck: (): Promise<AxiosResponse<Check>> => {
    return api.get(`${getBaseUrl('user')}/api/v1/healthcheck`);
  }
};


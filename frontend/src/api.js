/* eslint-disable no-unused-vars */
// api.js
import axios from 'axios';
import { LANGUAGE_VERSIONS } from './constants'; 

const API = axios.create({
  baseURL: 'https://emkc.org/api/v2/piston',
});

export const executeCode = async (language, sourceCode) => {
  try {
    const response = await API.post('/execute', {
      language,
      version: LANGUAGE_VERSIONS[language], 
      files: [
        {
          content: sourceCode,
        },
      ],
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to execute code');
  }
};

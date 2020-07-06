import axios from 'axios';

export const getTweets = () => {
  return axios.get('/api/tweets')
};

export const getUserTweets = (id: string) => {
  return axios.get(`/api/tweets/user/${id}`)
};

export const writeTweet = (data: any) => {
  return axios.post('/api/tweets/', data)
}

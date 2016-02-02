import redis from 'redis';

export const connectToCacheDatabase = () => {
  try {
    const client = redis.createClient(10130, 'pub-redis-10130.eu-central-1-1.1.ec2.redislabs.com', { no_ready_check: true });
    client.auth('password', (err) => {
      if(err) {
        throw err;
      }
    });
    client.on('connect', () => {
      console.log('Connected to redis connectToCacheDatabase');
    });
    return client;
  } catch(e) {
    console.log('Error while connecting to Redis.');
  }
};

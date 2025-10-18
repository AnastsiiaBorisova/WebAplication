import { User } from './models/User';
import axios from 'axios';

const user = new User({ id: 12 });
user.fetch();
setTimeout(() => {
  console.log(user);
}, 4000);

//axios.post('http://localhost:3000/users', { name: 'maname', age: 20 });
//axios.get('http://localhost:3000/users/1');

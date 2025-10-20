import { User } from './models/User';
import axios from 'axios';

const user = new User({ name: 'new record', age: 0 });

//user.set({ name: 'NEW', age: 8888 });
user.save();

//axios.post('http://localhost:3000/users', { name: 'maname', age: 20 });
//axios.get('http://localhost:3000/users/1');

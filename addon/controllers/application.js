import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
  messages: A(),
  chatTitle: 'Chat',
  actions: {
    sendMessage(){
      this.get('messages').pushObject(this.get('message'));
      this.set('message', '');
    }
  }
});

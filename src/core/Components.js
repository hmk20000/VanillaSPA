export default class Component {
  $target;
  state;
  constructor ($target, props) { 
    if(!$target){
      this.$target = document.querySelector('#root');
    }else{
      this.$target = $target;
      this.props = props;
    }
    this.setup();
    this.setEvent();
    this.render();
  }
  setup () {};
  mounted () {};
  template () { return ''; }
  render () {
    this.$target.innerHTML = this.template();
    this.mounted();
  }
  setEvent () {}
  setState (newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
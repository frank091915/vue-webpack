import "../../assets/style/footer.styl"

export default {
  data(){
    return{
      name:'Franky'
    }
  },
  render(){
    return(
      <div id="footer">
        <span>Written By {this.name}</span>
      </div>
    )
  }
}
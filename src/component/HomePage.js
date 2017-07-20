var React=require('react');
var Pet=require('./PetComponent');



class AppComponent extends React.Component{
    constructor(props){
      super(props);
      this.state={
        cat:{likesCount:0,result:''},
        dog:{likesCount:0,result:''}
      }
      this.handleShowWinnerBtnClick=this.handleShowWinnerBtnClick.bind(this);
      this.handleStartOverBtnClick=this.handleStartOverBtnClick.bind(this);
      this.handleDislikeBtnClick=this.handleDislikeBtnClick.bind(this);
      this.handleLikeBtnClick=this.handleLikeBtnClick.bind(this);
      
      
    }
    handleLikeBtnClick(event) {
      console.log("inside buton click");
    if(event.target.value==='Cat'){
      this.setState(
        function(prevState){
          return{
            cat:{likesCount:prevState.cat.likesCount+1,result:prevState.cat.result}
            
          }
         
        }
      )
    }
    else{
      console.log("inside else");
      this.setState(
        function(prevState){
          console.log(prevState);
          return{
            dog:{likesCount:prevState.dog.likesCount+1,result:prevState.dog.result}
           
          }
        });
      
    }
      
    };
  
  handleDislikeBtnClick(event) {
    if(event.target.value==='Cat'){
      this.setState(
        function(prevState){
          return{
            dog:{likesCount:prevState.dog.likesCount,result:prevState.dog.result},
            cat:{likesCount:prevState.cat.likesCount-1,result:prevState.cat.result},
          }
        }
      )
    }
    else{
      this.setState(
        function(prevState){
          return{
            dog:{LikesCount:prevState.dog.likesCount-1,result:prevState.dog.result},
            cat:{likesCount:prevState.cat.likesCount, result:prevState.cat.result}
          }
        }
      )
    }
  }
    handleShowWinnerBtnClick=function(){
        var catLikesCount=this.state.cat.likesCount;
        var dogLikesCount=this.state.dog.likesCount;
        var catResult='TIE';
        var dogResult='TIE';
        if(catLikesCount > dogLikesCount) {
           catResult='WINNER';
           dogResult='LOSER';
        }
      else if(dogLikesCount > catLikesCount){
        catResult='LOSER';
        dogResult='WINNER';
      }
      this.setState(function(prevState){
        return{
          cat:{likesCount:prevState.cat.likesCount,result:catResult},
          dog:{likesCount:prevState.dog.likesCount,result:dogResult}
        }
      })
    }
    handleStartOverBtnClick=function(){
      this.setState(function(prevState){
        return{
          cat:{likesCount:0,result:''},
          dog:{likesCount:0,result:''}
        }
      })
    }
   render(){
        return(
          <div>
      <h1 style={style}>
        Welcome to Cat and Dog Cuteness Fight Game!!!
      </h1>
        <h5>{this.winner}</h5>
      <div style={{marginTop: 60, textAlign: 'center'}}>
       <Pet petName='Dog' result={this.state.dog.result} petImageUrl='https://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg' likeCounts={this.state.dog.likesCount} onLikeBtnClick={this.handleLikeBtnClick} onDislikeBtnClick={this.handleDislikeBtnClick}/>
       <Pet petName='Cat' result={this.state.cat.result} petImageUrl='http://www.cutestpaw.com/wp-content/uploads/2011/11/Henke.jpg'  likeCounts={this.state.cat.likesCount} onLikeBtnClick={this.handleLikeBtnClick} onDislikeBtnClick={this.handleDislikeBtnClick}/>
      </div> 
      <div style={btnStyle}>
      {!this.state.dog.result && <button style={{marginRight:3}} onClick={this.handleShowWinnerBtnClick}> Show Winner</button>}
        <button onClick={this.handleStartOverBtnClick}> Start Over</button>
        </div>
    </div>
)
   }
};
  var btnStyle={
    marginTop:30,
    textAlign:'center'
  }
 var style = {
    textAlign: 'center',
    fontSize: '2em',
    color: 'rebeccapurple'
  };
module.exports=AppComponent;
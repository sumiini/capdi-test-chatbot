import React,{useState} from "react";
import styled from 'styled-components';
import mcimg from './melody.png';
import { Button, Popover, PopoverHeader, PopoverBody,Fade,Collapse, CardBody, Card } from 'reactstrap';
const McbotPlace = styled.div`
  float:right;
  margin-top:10%;
  margin-right:6%;
`;
const McbotMenu = styled.div`
  float:right;
  margin-top:10%;
  margin-right:3%;
`;

const McbotLeft = styled.div`
  margin-top:20%;
  margin-left:20%;
`;
const Mcbot =()=>{
    
    const [toggleMc,setToggleMc]=useState(false);
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [mctopic,setMctopic]=useState(false)
    const [mcplay,setMcplay]=useState(false)
    const [mcgame,setMcgame]=useState(false)
    const [mcmusic,setMcmusic]=useState(false)

    const bubbleToggle = () => {
        setPopoverOpen(!popoverOpen);
        console.log("toggle !")
    }

    let clickEvent=(e)=>{
        setToggleMc(!toggleMc);
        console.log("hi")
        console.log(toggleMc)
    } 

    let getTopic=(e)=>{
        console.log("대화주제추천")
        setMcplay(false)
        setMcgame(false)
        setMcmusic(false)
        setMctopic(!mctopic)

    }
    let getPlay=(e)=>{
        console.log("게임추천")
        setMctopic(false)
        setMcgame(false)
        setMcmusic(false)
        setMcplay(!mcplay)
    }
    let helpGame=(e)=>{
        console.log("게임도와줘")
        setMctopic(false)
        setMcplay(false)
        setMcmusic(false)
        setMcgame(!mcgame)
    }
    let playMusic=(e)=>{
        console.log("노래틀어줘")
        setMctopic(false)
        setMcplay(false)
        setMcgame(false)
        setMcmusic(!mcmusic)
    }
   
    return(
        <div>
            {/*mc봇 기본*/}
            {/* {toggleMc===true?<div><McbotMenu>activation</McbotMenu></div>:""}
            <McbotPlace>
                <button style={{backgroundColor:"white"}} onClick={(e) => clickEvent(e)}>
                    <img  width="200px" height="200px" src={mcimg}></img>
                </button>
            </McbotPlace> */}

            {/*mc봇 reactstrap*/}
            <McbotPlace>
                <div>{popoverOpen===false?<div>mc 봇의 도움이 필요하다면 클릭해 주세요 ♡</div>:""}</div>
                <Button id="Popover1" style={{backgroundColor:"white",border:"0",outline:"0"}}>
                <img  width="200px" height="200px" src={mcimg}></img>
                </Button>
                <Popover placement="top" isOpen={popoverOpen} target="Popover1" toggle={bubbleToggle}>
                    <PopoverHeader>MC봇에게 도움을 요청해 보세요 ! ^0^</PopoverHeader>
                    <PopoverBody style={{marginBottom:"2%"}}>
                        <div><button onClick={(e)=>getTopic(e)}>대화주제추천</button></div>
                        <div><button onClick={(e)=>getPlay(e)}>게임추천</button></div>
                        <div><button onClick={(e)=>helpGame(e)}>게임도와줘!</button></div>
                        <div><button onClick={(e)=>playMusic(e)}>노래틀어줘!</button></div>
                    </PopoverBody>
                </Popover>
            </McbotPlace>
            <div>
                {mctopic===true?
                <div>
                    <div>mbti</div>
                    <div>좋아하는음식</div>
                    <div>대화주제 같은거 디비에 저장해둔거?아님 그 ai처럼 주제 3개정도 알려주는거</div>
                </div>:
                mcplay===true?
                <div>
                    <div>이중모션</div>
                    <div>딸기당근수박참외메론게임</div>
                    <div>술게임 같은거 디비에 저장해둔거?아님 그 ai처럼 주제 3개정도 알려주는거</div>

                </div>:
                mcgame===true?
                <div>
                    <div>1</div>
                    <div>2</div>
                    <div>귓속말이나 하트작대기, 라이어, 탭탭, 가위바위보 등등
                        (각 게임은 컴포넌트 별로 만들어서 원하는 게임 누르면 게임이 활성화되고 프론트딴에서 게임을 진행한다.
                        그리고 방에 입장돼있는 사용자들의 게임 결과를 서버에 보내서 계산때리고 결과를 받아온다.)</div>
                </div>:
                mcmusic===true?
                <div>
                    <div>멜론 api가져와서 노래 스트리밍 되게 하려고했는데 몇년전에 api닫았던데...
                        일단 찾아보면될듯 노래 재생누르면 서버에 노래 틀어달라고
                        요청한다음에 방에 노래 틀어주는거임...
                        그냥 없던건데 넣어봤음 사운드 클라우드 api
                    </div>

                </div>
                :""
                }
            
            </div>
            
            
        </div>
            
        
            
    )
    
  
}

export default Mcbot;
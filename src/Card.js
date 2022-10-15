import React from 'react';
import user1 from './user1.png'
import face  from './face.png'
import twit  from './twit.png'
import skype  from './skype.png'

 
const Card = ({name,email,text,income,transc,balance})=>{
	return(
           
          <div className='bg-light-green dib br3 pa3 ma2 grow bw3  tc shadow-5' >
              <img alt='photoss' src={user1} />
              <div>
               <h2> {name}   </h2>
               <p> {text} / {email}    </p>
               <div>
               <img alt='pho' src={face} className='pa2' />
               <img alt='pho' src={twit} className='pa2' />
               <img alt='pho' src={skype} className='pa2'/>
               </div>
               <div>
               <button  className='pa3 ba black bg-light-blue br3' type="button">Message Now!</button>
               </div>
               <div className='flex justify-center '>
               <p className='pa2 ma2'> <b>{balance} </b> <br/> Wallet <br/> balance </p>
                <p className='pa2 ma2'> <b>{income} </b> <br/> Income <br/>Amount </p>
                <p className='pa2 ma2'> <b>{transc} </b> <br/> Total<br/> Transcations</p>

               </div>
              </div>
          </div>

		);
} 

export default Card;





import React from 'react';
import Card from './Card';

const Cardlist = ()=>{
return( 
	<div className='flex justify-center flex-wrap pa1 ma1 '>
	<Card  name={'Freddie J. Plourde'} email={'websitename.com'} text={'@Founder'} balance={2563} income ={6911} transc={1125}/>,
    <Card name={'Julie L. Abc'} email={'websitename.com'} text={'@Programmer'} balance={2473} income ={6947} transc={1258}/>,
    <Card name={'Christopher Gallardo'} email={'websitename.com'} text={'@webdesigner'} balance={2223} income ={6952} transc={125}/>,
    <Card name={'raju Ramiz'} email={'websitename.com'} text={'@HR'} balance={2533} income ={6942} transc={1555}/>,
    <Card name={'Julie L. Abc'} email={'websitename.com'} text={'@Programmer'} balance={2473} income ={6947} transc={1258}/>,
    <Card name={'Julie L. Abc'} email={'websitename.com'} text={'@Programmer'} balance={2473} income ={6947} transc={1258}/>,
    <Card name={'Julie L. Abc'} email={'websitename.com'} text={'@Programmer'} balance={2473} income ={6947} transc={1258}/>,
    <Card name={'Julie L. Abc'} email={'websitename.com'} text={'@Programmer'} balance={2473} income ={6947} transc={1258}/>,
    <Card name={'Julie L. Abc'} email={'websitename.com'} text={'@Programmer'} balance={2473} income ={6947} transc={1258}/>

    </div>
);
}

export default Cardlist;
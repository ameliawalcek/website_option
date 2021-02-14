import React, { useContext } from 'react'
import './Cards.css'
import MazeGame from '../../assets/images/projects/maze.PNG'
import SnapShot from '../../assets/images/projects/SnapShot.PNG'
import WEBOX from '../../assets/images/projects/WEBOX.png'
import TriviaTime from '../../assets/images/projects/TriviaTime.jpg'
import ChitChat from '../../assets/images/projects/ChitChat.jpg'
import ExpenseTracker from '../../assets/images/projects/ExpenseTracker.jpg'
import TaskTracker from '../../assets/images/projects/TaskTracker.PNG'
import MarioRush from '../../assets/images/projects/MarioRush.jpg'
import { ProjectContext } from '../../App'
import CardItem from './CardItem/CardItem'

function Cards() {

  return (
    <div className='cards'>
      <h1>PROJECTS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={MazeGame}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Maze Game'
              path='/services'
            />
            <CardItem
              src={SnapShot}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Snap Shot'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={WEBOX}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='WEBOX'
              path='/services'
            />
            <CardItem
              src={TriviaTime}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Trivia Time'
              path='/products'
            />
            <CardItem
              src={ChitChat}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Chit Chat'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={TaskTracker}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Task Tracker'
              path='/services'
            />
            <CardItem
              src={ExpenseTracker}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Expense Tracker'
              path='/products'
            />
            <CardItem
              src={MarioRush}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Mario Rush'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
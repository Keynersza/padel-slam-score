import React, { useState } from 'react'
import { useGameStore } from '../Components/Torneo/hooks.ts'

const BotonControllers = () => {
   const [sumarGroups1, setSumarGroups1] = useState(0)
   const [sumarTopScore, setSumarTopScore] = useState(0)
   const [sumarBotScore, setSumarBotScore] = useState(0)
   const [sumarBut, setSumarBut] = useState(0)
   const { torneo } = useGameStore()
    let topScore = torneo?.groups[0]?.games[0]?.leftScore 

   const sumarPunt = () => {

      if (sumarGroups1 === 40) {
         setSumarGroups1(0)
         if (sumarTopScore === 6) {
            setSumarTopScore(0)
            localStorage.setItem("setsTop", 0)
            return
         } else {
            setSumarTopScore(sumarTopScore + 1)
            localStorage.setItem("setsTop", sumarTopScore + 1)
            topScore = sumarTopScore + 1 
            console.log("hola", topScore);
         }
         return
      } else if (sumarGroups1 === 30) {
         setSumarGroups1(sumarGroups1 + 10)
      } else {
         return setSumarGroups1(sumarGroups1 + 15)
      }
   }

   const restarPunt = () => {

      if (sumarGroups1 === 40) {
         setSumarGroups1(sumarGroups1 - 10)
      } else if (sumarGroups1 === 30) {
         setSumarGroups1(sumarGroups1 - 15)
      } else {
         return setSumarGroups1(0)
      }
   }


   const sumarGroups2 = () => {
      if (sumarBut === 40) {
         setSumarBut(0)
         if (sumarBotScore === 6) {
            setSumarBotScore(0)
            localStorage.setItem("setsBot", 0)
            return
         } else {
            setSumarBotScore( sumarBotScore + 1)
            localStorage.setItem("setsBot", sumarBotScore + 1)
         }
         return
      } else if (sumarBut === 30) {
         setSumarBut(sumarBut + 10)
      } else {
         setSumarBut(sumarBut + 15)
      }
   }

   const restarGroups2 = () => {
      if (sumarBut === 40) {
         setSumarBut(sumarBut - 10)
      } else if (sumarBut === 30) {
         setSumarBut(sumarBut - 15)
      } else {
         return setSumarBut(0)
      }
   }

   return {
      sumarPunt,
      restarPunt,
      sumarGroups1,
      sumarTopScore,
      sumarBotScore,
      sumarBut,
      sumarGroups2,
      restarGroups2,
      topScore
   }
}

export default BotonControllers
import React, { useState, useEffect } from 'react'

const DateTime = () => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      
      const dayName = daysOfWeek[now.getDay()]
      const monthName = months[now.getMonth()]
      const date = now.getDate()
      
      let hours = now.getHours()
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const ampm = hours >= 12 ? 'PM' : 'AM'
      
      hours = hours % 12
      hours = hours ? hours : 12 
      
      const formattedTime = `${dayName} ${monthName} ${date} ${hours}:${minutes} ${ampm}`
      setDateTime(formattedTime)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 60000) 

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      {dateTime}
    </div>
  )
}

export default DateTime

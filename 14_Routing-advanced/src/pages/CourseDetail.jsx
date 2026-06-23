import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
  const { courseId } = useParams()

  return (
    <div>
      <h1 className='whitespace-nowrap'>{courseId} Course Detail Page</h1>
    </div>
  )
}

export default CourseDetail

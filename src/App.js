import React from 'react';
import TopForm from './TopForm';
import TasksList from './TasksList';

const App = () => {
  return(
    <div className='container w-100 h-100 p-3'>
      <div className='row h-100 justify-content-center align-align-items-start'>
        <div className='col-12 col-md-8 col-lg-6 bg-light shadow rounded-3 p3 h_fit'>
          <TopForm />
          <TasksList />
        </div>
      </div>
    </div>
  )
}
export default App;
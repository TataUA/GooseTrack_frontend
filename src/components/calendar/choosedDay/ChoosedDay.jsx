import DayCalendarHead from '../dayCalendarHead/DayCalendarHead';
import { ColumnsContainer } from './ChoosedDay.styled';
import TasksColumn from '../tasksColumn/TasksColumn';
import { selectMonthTasks } from '../../../redux/task/selectors';
import { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';

const ChoosedDay = ({tasks=[] , getTask, selectedDate, setSelectedDate }) => {
  const columnTitles = ['To do', 'In progress', 'Done'];

  return (
    <>
      <DayCalendarHead
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <ColumnsContainer>
        {columnTitles.map((columnTitle) => {
          return (
            <TasksColumn
              key={nanoid()}
              title={columnTitle}
              tasks={tasks}
              getTask={getTask}
            ></TasksColumn>
          );
        })}
      </ColumnsContainer>
    </>
  );
};

export default ChoosedDay;

ChoosedDay.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func.isRequired,
};

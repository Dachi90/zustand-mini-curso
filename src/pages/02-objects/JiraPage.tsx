import { useMemo } from 'react';
import { JiraTasks } from '../../components';
import { useTaskStore } from '../../stores';

export const JiraPage = () => {
	const pendingTasks = useMemo(() => useTaskStore.getState().getTaskByStatus('open'), []);
	const inProgressTasks = useMemo(() => useTaskStore.getState().getTaskByStatus('in-progress'), []);
	const doneTasks = useMemo(() => useTaskStore.getState().getTaskByStatus('done'), []);

	return (
		<>
			<h1>Tareas</h1>
			<p>Manejo de estado con objectos de Zustand</p>
			<hr />

			<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
				<JiraTasks
					title='Pendientes'
					tasks={pendingTasks}
					value='open'
				/>

				<JiraTasks
					title='Avanzando'
					tasks={inProgressTasks}
					value='in-progress'
				/>

				<JiraTasks
					title='Terminadas'
					tasks={doneTasks}
					value='done'
				/>
			</div>
		</>
	);
};

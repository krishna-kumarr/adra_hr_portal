import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './Views/Common/Login';
import HrHome from './Views/Hr/HrHome';
import EmployeesListingPage from './Views/Hr/EmployeesListingPage';
import AttendanceManagement from './Views/Hr/AttendanceManagement';
import RecuirementsAndApplicationTracking from './Views/Hr/RecuirementsAndApplicationTracking';
import EmployeeFullTime from './Views/Hr/Employee_listing/EmployeeFullTime';
import HrMainLayout from './Views/Hr/Resuable_comps/HrMainLayout';
import HrAuth from './Views/Hr/Auth/HrAuth';
import EmployeeProbation from './Views/Hr/Employee_listing/EmployeeProbation';
import EmployeeIntern from './Views/Hr/Employee_listing/EmployeeIntern';
import SchedulesManagement from './Views/Hr/SchedulesManagement';
import NewApplicant from './Views/Hr/Applicant_tracking/NewApplicant';
import Rejected from './Views/Hr/Applicant_tracking/Rejected';
import Shortlisted from './Views/Hr/Applicant_tracking/Shortlisted';
import Pending from './Views/Hr/Applicant_tracking/Pending';
import Recommended from './Views/Hr/Applicant_tracking/Recommended';
import ApplicantDetails from './Views/Hr/Applicant_tracking/ApplicantDetails';
import store from './store';

// actions 
import { loadUser } from './Storage/Action/authAction';
import ProtectedAuth from './Views/Common/ProtectedAuth';


function App() {

  useEffect(() => {
    store.dispatch(loadUser)
  }, [])

  return (
    <>
      <Router>
        <div className="App">
          <ToastContainer theme='light' />

          <Routes>
            <Route path='/' element={<Login />} />

            <Route path='dashboard' element={<ProtectedAuth />}>
              <Route path="hr_dashboard" element={<HrAuth />}>
                <Route index element={<HrHome />} />
                <Route path="employee_details" element={<EmployeesListingPage />}>
                  <Route index exact element={<EmployeeFullTime />} />
                  <Route path="probation" element={<EmployeeProbation />} />
                  <Route path="Intern" element={<EmployeeIntern />} />
                </Route>
                <Route path="attendance" element={<AttendanceManagement />} />
                <Route path="applicant_tracking" element={<RecuirementsAndApplicationTracking />} >
                  <Route index exact element={<NewApplicant />} />
                  <Route path="recommended" element={<Recommended />} />
                  <Route path="pending" element={<Pending />} />
                  <Route path="shortlisted" element={<Shortlisted />} />
                  <Route path="rejected" element={<Rejected />} />
                </Route>
                <Route path="applicant_details" element={<ApplicantDetails />} />
                <Route path="expense_history" element={<expense_history />} />
                <Route path="schedules" element={<SchedulesManagement />} />
              </Route>


            </Route>

          </Routes>
        </div>
      </Router >
    </>
  );
}

export default App;

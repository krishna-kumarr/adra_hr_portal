import axios from "axios";
import toast from "react-hot-toast";

const refreshToken = async () => {
  try {
    await axiosInstance.get("/refresh_token")
  } catch (err) {
    console.log(err)
  }

};

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});



axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response)
    // if (response.data.error_code === 0 || response.data.error_code === 200) {
    //   switch (response.data.message) {
    //     case "Trial period":
    //     case "Job posted successfully":
    //     case "Details fetched successfully!":
    //     case "Your profile has been retrieved successfully!":
    //     case "Your profile has been updated successfully!":
    //     case "The job status has been updated successfully.":
    //     case "Candidate status has been updated successfully!":
    //     case "The job post has been updated successfully!":
    //     case "User details displayed successfully":
    //     case "Resume extracted successfully!":
    //     case "Professional Profile info fetched successfully":
    //     case "Flag updated successfully":
    //     case "Search results displayed successfully!":
    //     case "Job has been saved successfully!":
    //     case "Filtered list successfully!":
    //     case "Notification status updated successfully":
    //     case "Notification cleared successfully":
    //     case "Additional info inserted successfully":
    //     case "Your video has been uploaded successfully":
    //     case "Profile picture uploaded successfully":
    //     case "Resume deleted successfully":
    //     case "Questions fetched successfully":
    //     case "User account created successfully":
    //     case "Job unsaved":
    //     case "success!":
    //     case "Partner profile Not Found":
    //     case "No records found for this employer":
    //     case "Employer profile Not Found":
    //     case "Learning post Not Found":
    //     case "Record not found":
    //     case "Post not found":
    //     case "Job not found":
    //     case "Details fetched successfully":
    //     case "Your account has been created successfully. A verification link has been sent to your registered email. Please verify to proceed using the platform.":
    //     case "Login successful!":
    //     case "No records found":
    //     case "No record found":
    //     case "No jobs found!":
    //     case "No jobs found":
    //     case "No job posted":
    //     case "No profile matches":
    //     case "Status has been updated successfully.":
    //     case "We notice that you're currently not subscribed our product. Please choose a subscription plan suites for you":
    //     case "token updated":
    //     case "success":
    //     case "Post has been created successfully!":
    //       break;


    //     case "The job has been successfully closed. We would like to thank you for posting the job.":
    //     case "Job drafted":
    //     case "Applied for the job successfully!":
    //     case "Profile picture deleted successfully":
    //     case "Could not upload profile picture":
    //     case "Unsupported file format":
    //     case "No jobs have been posted by this company yet.":
    //     case "No applicants have applied for this job yet.":
    //     case "No jobs have been posted by the employer.":
    //     case "The job has been recommended to the professional!":
    //     case "We have a job recommendation for you. Click on the recommended tab to view the recommendation.":
    //     case "This job has already been recommended to the professional":
    //     case "The professional has been recommended for the job!":
    //     case "We have a profile recommendation for the job you posted":
    //     case "The professional has already been recommended for this job!":
    //     case "The professional has been removed from the recommendation!":
    //     case "Your draft has been saved successfully":
    //       toast.success(response.data.message);
    //       break;

    //     default:
    //       toast.success(response.data.message);
    //       break;
    //   }
    // } else {
    //   if(response.data.error_code !== 300){
    //     toast.error(response.data.message);
    //   }
    // }
    return response;
  },
  async (error) => {
    if (error.code === "ERR_NETWORK") {
      toast.error(error.message)
    } else {
      if (error.response && error.response.status === 401) {
        toast.error(error.response.data.data.message)
        
        if (error.response.data.data.message === "Invalid token. Please try again.") {
          await refreshToken();
        }
      }
    }
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use((config) => {

  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  } else {
    config.headers['Content-Type'] = 'application/json';
  }

  return config;
});

export default axiosInstance;


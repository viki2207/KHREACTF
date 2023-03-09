import React from "react";

const DashboardAction = () => {
  return (
    <div>
      <div class="dash-buttons">
        <a href="/edit-profile" class="btn btn-light">
          <i class="fas fa-user-circle text-primary"></i> Edit Profile
        </a>
        <a href="/add-experience" class="btn btn-light">
          <i class="fab fa-black-tie text-primary"></i> Add Experience
        </a>
        <a href="/add-education" class="btn btn-light">
          <i class="fas fa-graduation-cap text-primary"></i> Add Education
        </a>
      </div>
    </div>
  );
};

export default DashboardAction;

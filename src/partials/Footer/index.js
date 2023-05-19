import "./styled.css";
import { Stack} from "@mui/material";

import { useNavigate } from "react-router-dom";


function Footer() {
  
  const navigate = useNavigate();

  const handleSubmitDashboard = (event) => {
    event.preventDefault();
    navigate('/dashboard');
  }

  const handleSubmitAnalyse = (event) => {
    event.preventDefault();
    navigate('/analisegasto');
  }

  const handleSubmitCalendar = (event) => {
    event.preventDefault();
    navigate('/gastomensal');
  }

  return (
    <div>
      <div class="nav">
        <div>
          <footer id="footer">
          <Stack 
            spacing={{ xs: 8, sm: 8, md: 14 }} 
            direction="row" 
            useFlexGap flexWrap="wrap" 
            justifyContent="center"
            paddingTop={"15px"}
          >
            <div class="icon">
              <svg height="80" width="80">
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  stroke="black"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
              <i onClick={handleSubmitDashboard} id="dashboard_icon" class="fas fa-arrow-left"></i>
            </div>

            <div class="icon">
              <svg height="80" width="80">
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  stroke="black"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
              <i onClick={handleSubmitAnalyse} id="calendar_icon"class="far fa-calendar-alt"></i>
            </div>

            <div class="icon">
              <svg height="80" width="80">
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  stroke="black"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
              <i onClick={handleSubmitCalendar} id="analyse_icon"class="far fa-chart-bar"></i>
            </div>

            <div class="icon">
              <svg height="80" width="80">
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  stroke="black"
                  stroke-width="2"
                  fill="none"
                />
              </svg>
              <i class="fas fa-cog"></i>
            </div>
          </Stack>

          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
<template>
          <div class="myBar-info pull-left">
            <ul>
              <li v-for="fact in facts" :key="fact.customerTokenFile">
            <table>
              <tbody>
                <tr>
                <td class= "label">Customer Token:</td>
                <td><h6>{{fact.customerTokenFile}}</h6></td>
                </tr>
                <tr>
                <td class="label">Tag:</td>
                <td><h6>{{fact.dashboardHistoryObject.tag}}</h6></td>
                </tr>
                <tr>
                <td class="label">Analytic:</td>
                <td><h6>{{fact.dashboardHistoryObject.analyticName}}</h6></td>
                </tr>
                <tr>
                <td class="label">Last Run:</td>
                <td><h6>{{fact.dashboardHistoryObject.lastRun}}</h6></td>
                </tr>
                <tr>
                <td class="label">Data:</td>
                <td><h6>{{fact.dashboardHistoryObject.sharetable}}</h6></td>
                </tr>
              </tbody>
            </table>
             </li>
            </ul>
          </div>
</template>

<script>
import fetch from "isomorphic-fetch";

export default {
  async asyncData() {
    const response = await fetch(
      "https://dataanalyser-26354.firebaseio.com/DashboardRefresh.json"
    );
    const facts = await response.json();
    return { facts };
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  color: #172a3a;
  margin-top: 5px;
  max-height: 100%;
}
.card-title {
  font-weight: 550;
}
/* Changed Padding below from 15px this is an existing rule in app-copy.css. This rule governs the wells between cards */
.row .col {
  padding-left: 5px;
  padding-right: 5px;
}
.myBar-info {
  width: 97%;
  border: solid lightgray 1px;
  height: 97%;
  margin-top: 15px;
  margin-left: 15px;
  color: gray;
  padding-top: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
td {
  padding-left: 10px;
  padding-top: 3px;
  padding-right: 2px;
  padding-bottom: 3px;
}
.myBar-info .card-title {
  font-size: 0.9em;
}
.myBar-info label {
  font-size: 0.5em;
}
.myBar-info h6 {
  font-size: 0.7em;
  color: #172a3a;
  padding-left: 15px;
  padding-top: 10.7px;
  font-weight: 530;
}
.s3-card {
  height: 400px;
  margin: 0;
  margin-top: -33px;
  margin-bottom: -25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
canvas {
  height: 300px;
  margin-top: -22px;
  margin-left: 5%;
}
#myDoughNut {
  height: 300px;
}
#myLine {
  height: 300px;
  margin-left: -2%;
}
#myPolar {
  height: 300px;
}
#myBar {
  margin-left: -0.2%;
}
.myBar-container {
  width: 58%;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  height: 350px;
}
/* the rule below controls three little rectangles under the canvas...dont know what they are for */
audio,
canvas,
progress,
video {
  display: none;
}
/* Modals */
.vodal .running-modal-text {
  text-align: center;
  color: #172a3a;
  font-size: 1rem;
}
.vodal h5 {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 1.8rem;
  width: 100%;
  text-align: center;
}
.no-conn-modal {
  position: absolute;
  top: 15px;
}
.update-btn-modal {
  position: absolute;
  top: 12px;
  left: 317px;
  width: 65px;
  padding: 6px;
  font-size: 13px;
}
.vodal-header {
  margin-left: -3.2%;
  margin-right: -3.2%;
  margin-bottom: 3%;
  margin-top: -3%;
  height: 52px;
  width: 394px;
  border-bottom: solid lightslategray 0.3px;
  padding-top: 15px;
  padding-left: 10px;
  background-color: #172a3a;
  color: white;
}
.vodal-bg-styling {
  position: absolute;
  top: 50px;
  left: 3px;
  background: #ffffff;
  width: 394px;
  height: 200px;
  padding-top: 20px;
  padding-left: 10px;
}
.vodal h6 {
  padding-left: 15px;
  padding-top: 50px;
  color: #172a3a;
}
.test-modal-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.vodal-footer {
  position: absolute;
  top: 250px;
  left: 3px;
  height: 52px;
  width: 394px;
  border-top: solid lightslategray 0.3px;
  padding: 0.5rem;
  background-color: #ffffff;
  color: lightslategray;
}
/* End of Modal */

/* Media Queries */
@media only screen and (min-width: 1901px) and (max-width: 3000px) {
  .card-title {
    font-size: 1.1em;
  }
  .s2-card {
    height: 591px;
  }
  .myBar-info {
    height: 100%;
    margin-top: 15px;
    padding-top: 30px;
    padding-right: 15px;
  }
  td {
    padding-left: 43px;
  }
  .myBar-info .label {
    font-size: 0.7em;
  }
  .myBar-info h6 {
    font-size: 0.7em;
    color: #172a3a;
    padding-left: 5px;
    padding-top: 0.7px;
  }
  .s3-card {
    height: 510px;
    margin-top: 0px;
    margin-bottom: -25px;
    padding-bottom: 0px;
  }
  .s3-card .chart-padding {
    padding-top: 50px;
  }
  .widget1 {
    height: 150px;
  }
  .widget2 {
    height: 150px;
  }
  .widget3 {
    height: 150px;
  }
  .widget4 {
    height: 150px;
  }
  .widget-text h3 {
    position: absolute;
    top: 35px;
    left: 65%;
    color: #ffffff;
    font-size: 2.2em;
    transform: translate(-50%, -50%);
  }
  .widget-text h5 {
    margin: 0;
    position: absolute;
    top: 68px;
    left: 50%;
    font-size: 1.7em;
    transform: translate(-50%, -50%);
  }
  .fa-search {
    position: absolute;
    left: 5%;
    top: -2%;
    transform: translate(-50%, -50%);
  }
  .fa-cubes {
    position: absolute;
    left: 9.8%;
    top: -3%;
    transform: translate(-50%, -50%);
  }
  .fa-group {
    position: absolute;
    left: 7.2%;
    top: -4%;
    transform: translate(-50%, -50%);
  }
  .fa-database {
    position: absolute;
    left: 4.1%;
    top: -4%;
    transform: translate(-50%, -50%);
  }
  .fa-3x {
    font-size: 3.5em;
  }
  .water-mark-md {
    top: 45%;
    left: 22%;
  }
}
</style>


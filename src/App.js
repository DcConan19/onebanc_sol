// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import Typewriter from "typewriter-effect";
import ManIcons from './components/feature/ManIcons';
import MobileIcons from './components/feature/MobileIcons';
import Main from "./components/Main";
import Footer from "./components/Footer"
// import Switch from 'react-router-dom';


const App = () => {
  return (
    <>
    <div id="page_container">
        <div class="section divcol">
            <img src="/img/logo_onebanc.png" class="logo" alt="OneBanc logo" />
            <div style={{clear:"both"}}></div>
            < Main />
            <Footer />
        </div>
        <div class="visual_content_holder divcol">
        <div style={{position:'relative', height:'100%'}}>
          
          <table class="feature_table">
            <tr>
              <ManIcons type='regular' />

              <td style={{textAlign:'center'}}>
                <img class="vc_dottedline" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAJoCAYAAABMRjAxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4NzRhYzAwMS0zZjNhLTQ4MzMtOTBkMy01YzY3YjgyYWMzZjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTIwQzJDOEIyM0IyMTFFQTgyNkVERkY4OTU4OTdCNTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTIwQzJDOEEyM0IyMTFFQTgyNkVERkY4OTU4OTdCNTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZDIyZmYzZTktMjJlMy00ZWMyLTlhYWMtY2UxM2QwNjRhZjY2IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NTYzOTJlZmYtOWI5OS0yYjQ3LTlhOTQtZTk0NTdlZTgyOTRhIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/ZMvSwAAAxRJREFUeNrEWEFrE0EY3dnZbJtqGpuqqAjWg1QUQQVPHhQtioh3EepZPHrxJF4Fr/4Ab4JHwZMXD54MehQsCIpIK2gVWt1sYnb93jJvyJJWMWb7BV74dmeSffNmvm/erAmCYK/gWChfsWAGQSboIsAnZxAgyHmn+AG+IoE18rVN0DR5nvvOWxUE7qEGNPYI5tG0T3COwzEkH1ZCA/+cIagJGgh+CVbBpy6YVpEFT7fghCk6LFhA037BBQRdsCR5W5ksxWqZFLTApYFlQ2KRmizg04AspwWLaNolOImgI0i3SBasjVnr7n4xjpxRk2XGCREsCl6haRoFgrL02Lm2cXH4z8AwPSdQTSDLd8FLFTVKshwVHMfFHa4NP/YeA1CMOIqxyhJR8FTw07gUnlOttEXBPy+4hKv7HHLKztnIC6AIphjYwZQpd44ZrAg+4KezgFrugM92zNV1wRXcfURZOoOVtmI+qGwRZNuN1UlisZosmJQmLu4J2mg6gowqVdoxDLnzl9SDOYmtm4L3rLRWTZZ5N0PBE6xeNO0UJAj6ADubavlgA5oEnwW13CnJchlTheAtUiZi0Ru9pExR1ZieNt9c1XCwqtdA40QRaFbaCDRuC75i9b6gJ1nluMb10JAOts5/9tkUs+k15gO3W2hSyx2fyw9hTrBIrgm+DXXOq+fzA8FTOBUS05PlAJ4OWZ4hqdF0ikFAc+I5B5zTcdLwgmfWVf53xhmYUE2Wi4LP1pWUFZqKtForu7EsxezAriwxu/VkuSF4Az5twaeh7cZWL0vfH7LA54xgXbXSFgX/ruAjZHnOfadHd5GPtB3D5NT5QsBufh40dCmFLG1a/R2q50HsnhMIHpDPMuwTXbflNpGNbvW7fI+UUKhhFweDF2JS5tDPuBOi3tuDFt8e3BKcxd3H5LzGGfyDF/VjT3ngTf7lxZQpnYmss0b+7YFeScGx9BAubrLSQqMmgnUYGJI3Q6PIKUJCp1c2wP5XfZ6kuoNZWX4h6Sst/nBJ39NiHzwYug36KkeRsDgsDx0M/UjXWH+S3wIMAFLnAEYLxRAIAAAAAElFTkSuQmCC"
                />
              </td>

              <ManIcons />
            </tr>
          </table>

        </div>
      </div>
        <div class="mob_hide divcol" style={{verticalAlign:'top'}}>
            <img class="bg_cloud_canvas" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIxNjQiIHZpZXdCb3g9IjAgMCAyNSAxNjQiPgogIDxtZXRhZGF0YT48P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MCA3OS4xNjA0NTEsIDIwMTcvMDUvMDYtMDE6MDg6MjEgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiLz4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+PC9tZXRhZGF0YT4KPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIyLjk1NCwwLjEyOVMwLjUyNiwxOC4yLDUuOCw0OC4wODNzOS41NTYsMjIuMzg0LDQuNDE0LDQ4Ljk3NlMtMTMuMjMyLDEyMy4zMzQsMTYuOTI2LDE2N0wxNjMsMTQ1LjA1OSwxMzguNjk0LTE1WiIvPgo8L3N2Zz4K"
            />
        </div>
    </div>
    <div class="portrait_footer_gutter">&nbsp;</div>
    </>
  );
};

export default App;
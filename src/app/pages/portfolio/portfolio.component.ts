import { Component } from '@angular/core';
import { PegasusComponent } from "../../components/pegasus/pegasus.component";
import { PiccolasComponent } from "../../components/piccolas/piccolas.component";
import { APIpiccolasComponent } from "../../components/apipiccolas/apipiccolas.component";

@Component({
    selector: 'app-portfolio',
    standalone: true,
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.css',
    imports: [PegasusComponent, PiccolasComponent, APIpiccolasComponent]
})
export class PortfolioComponent {

}

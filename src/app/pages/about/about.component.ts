import { Component } from '@angular/core';
import { MisRedesComponent } from "../../components/mis-redes/mis-redes.component";
import { SkillsComponent } from "../../components/skills/skills.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [MisRedesComponent, SkillsComponent]
})
export class AboutComponent {

}

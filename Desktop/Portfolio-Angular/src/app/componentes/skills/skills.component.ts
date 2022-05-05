import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skills } from 'src/app/Entidades/skill';
import { SkillService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillComponent implements OnInit {

  skillList!: Skills[];
  form: FormGroup;
  accion = 'Agregar';
  id: number | undefined;
  usuarioAutenticado:boolean = true; // por defecto debe estar en false

  constructor(private miServicio:SkillService, private miFormBuilder:FormBuilder) { 
    this.form = this.miFormBuilder.group({
      tipoDeSkill: ['', [Validators.required]],
      score: ['', [Validators.required]],
  });
}

  ngOnInit(): void {
    this.obtenerSkill();
  }

  obtenerSkill(){
    this.miServicio.getListSkill().subscribe(data => {
      this.skillList = data;
    }, error => {
      console.log(error);
    });
  }

  guardarSkill() {

    const skill: any = {
    tipoDeSkill: this.form.get('tipoDeSkill')?.value,
    score: this.form.get('score')?.value
    }

    if (this.id == undefined) {

      this.miServicio.saveSkill(skill).subscribe(data => {
        this.obtenerSkill();
        this.form.reset();
        document.getElementById('cerrarModalSkill')?.click();
      }, error => {
        console.log(error);
      });

    } else {

      skill.id = this.id;

      this.miServicio.updateSkill(this.id, skill).subscribe(data => {
        this.form.reset();
        this.accion = 'Agregar';
        this.id = undefined;
        ;
        this.obtenerSkill();
      }, error => {
        console.log(error);
      });
    }
  }

  
  editarSkill(skill: any){
    this.accion = 'Editar';
    this.id = skill.id;

    this.form.patchValue({
      tipoDeSkill: skill.tipoDeSkill,
      score: skill.score
    });
  }

  eliminarSkill(id: number) {
    this.miServicio.deleteSkill(id).subscribe(data => {
      this.obtenerSkill();
    });
  }

}
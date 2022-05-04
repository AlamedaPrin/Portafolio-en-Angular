import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/app/Entidades/skill';
import { SkillService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillComponent implements OnInit {

  skillList!: Skill[];
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
    }

    if (this.id == undefined) {
      this.miServicio.saveSkill(skill).subscribe(data => {
        this.obtenerSkill();
        this.form.reset();
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
    });
  }

  eliminarSkill(id: number) {
    this.miServicio.deleteSkill(id).subscribe(data => {
      this.obtenerSkill();
    });
  }

}
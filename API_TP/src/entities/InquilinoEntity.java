package entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table (name="inquilinos")
public class InquilinoEntity {
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)	
	private int id;
	
	@ManyToOne
	@JoinColumn(name= "identificador")
	
	private UnidadEntity unidad;
	
	
	@OneToOne
	@JoinColumn(name="documento")
	private PersonaEntity persona;
	
	public InquilinoEntity() {}
	
	public InquilinoEntity(UnidadEntity unidad, PersonaEntity persona) {
		super();
		this.unidad = unidad;
		this.persona = persona;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public UnidadEntity getUnidad() {
		return unidad;
	}

	public void setUnidad(UnidadEntity unidad) {
		this.unidad = unidad;
	}

	public PersonaEntity getPersona() {
		return persona;
	}

	public void setPersona(PersonaEntity persona) {
		this.persona = persona;
	}
	
	
}

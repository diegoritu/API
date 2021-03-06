package modelo;

import daos.ImagenDAO;
import views.ImagenView;

public class Imagen {

	private int numero;
	private String direccion;
	private String tipo;

	public Imagen(String direccion, String tipo) {
		this.direccion = direccion;
		this.tipo = tipo;
	}
	public Imagen(int numero, String direccion, String tipo) {
		this.numero = numero;
		this.direccion = direccion;
		this.tipo = tipo;
	}

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public void save(int numeroReclamo) {
		ImagenDAO.getInstancia().save(this, numeroReclamo);
	}
	public ImagenView toView() {
		return new ImagenView(numero, direccion, tipo);
	}

}

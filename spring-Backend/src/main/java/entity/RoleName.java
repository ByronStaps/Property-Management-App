package entity;

public enum RoleName {

	ROLE_USER("user"), ROLE_ADMIN("admin");

	private String role;

	RoleName(String role) {
		this.role = role;
	}
	
	public String role()
	{
		return role;
	}
}

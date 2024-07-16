# Configurar aws en mi local con un perfil

1. Iniciar sesión en la Consola de Administración de AWS:
   • Ve a AWS Management Console e inicia sesión con tu cuenta de AWS.
2. Ir a IAM (Identity and Access Management):
   • En el menú de servicios, selecciona “IAM” bajo la sección “Security, Identity, & Compliance”.
3. Crear un Usuario IAM (si no tienes uno):
   • En el panel de navegación de la izquierda, selecciona “Users” y luego “Add user”.
   • Ingresa un nombre de usuario.
   • Selecciona el tipo de acceso “Programmatic access” para obtener una clave de acceso y una clave secreta.
   • En la sección de “Permissions”, asigna las políticas necesarias para el usuario (por ejemplo, “AdministratorAccess” para permisos completos).
4. Obtener las Credenciales:
   • Después de crear el usuario, AWS te mostrará el Access Key ID y Secret Access Key. Asegúrate de guardarlos en un lugar seguro, ya que solo se mostrarán una vez.

Configurar el Perfil de AWS en ~/.aws/config

Una vez que tengas tus credenciales de AWS, puedes configurarlas en tu archivo de configuración de AWS CLI. Aquí tienes cómo hacerlo:

    1.	Abrir tu terminal.
    2.	Ejecutar el comando aws configure para crear un perfil de AWS:

aws configure --profile myawsprofile

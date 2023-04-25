using XGEM.PortalCliente.Domain.Entities;

namespace XGEM.PortalCliente.Domain.Model
{
    public class LoginModel
    {
        public int? id { get; set; }
        public string? email { get; set; }
        public string? nome { get; set; }
        public string? nmUsuarioCadastro { get; set; }
        public DateTime dtCadastro { get; set; }
        public string? nmUsuarioAlteracao { get; set; }
        public DateTime? dtAlteracao { get; set; }
        public bool? ativo { get; set; }

        public LoginModel parser(Login login) 
        {
         
            if(login != null)
            {
                this.id = login.id;
                this.email = login.email;
                this.nome = login.nome;
            }

            return this;

        }
    }
}

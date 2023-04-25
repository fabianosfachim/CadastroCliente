using XGEM.PortalCliente.Domainl.Entities;

namespace XGEM.PortalCliente.Domain.Entities
{
    public class Login : EntityBase
    {
        public int id { get; set; } 
        public string? email { get; set; }
        public string? password { get; set; } 
        public string? nome { get; set; }
        public string? nmUsuarioCadastro { get; set; }
        public  DateTime? dtCadastro { get; set; }
        public string? nmUsuarioAlteracao { get; set; }
        public DateTime? dtAlteracao { get; set; }
        public bool? ativo { get; set; }
    }
}
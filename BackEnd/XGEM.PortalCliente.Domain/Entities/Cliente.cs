using XGEM.PortalCliente.Domainl.Entities;

namespace XGEM.PortalCliente.Domain.Entities
{
    public class Cliente : EntityBase
    {
        public int id { get; set; }
        public string? razaoSocial { get; set; }
        public string? nomeFantasia { get; set; }
        public string? cpfCnpj { get; set; }
        public string? email   { get; set; }   
        public string? ddd { get; set; }
        public string? telefone { get; set; }
        public string? nmUsuarioCadastro { get; set; }
        public DateTime? dtCadastro { get; set; }
        public string? nmUsuarioAlteracao { get; set; }
        public DateTime? dtAlteracao { get; set; }
  

    }
}

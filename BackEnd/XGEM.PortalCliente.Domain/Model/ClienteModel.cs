using XGEM.PortalCliente.Domain.Entities;

namespace XGEM.PortalCliente.Domain.Model
{
    public class ClienteModel
    {
        public int id { get; set; }
        public string? razaoSocial { get; set; }
        public string? nomeFantasia { get; set; }
        public string? cpfCnpj { get; set; }
        public string? email { get; set; }
        public string? ddd { get; set; }
        public string? telefone { get; set; }
        public string? nmUsuarioCadastro { get; set; }
        public DateTime? dtCadastro { get; set; }
        public string? nmUsuarioAlteracao { get; set; }
        public DateTime? dtAlteracao { get; set; }

        public ClienteModel parser(Cliente cliente)
        {

            this.id = cliente.id;
            this.razaoSocial = cliente.razaoSocial;
            this.nomeFantasia = cliente.nomeFantasia;
            this.cpfCnpj = cliente.cpfCnpj;
            this.email = cliente.email;
            this.ddd = cliente.ddd;
            this.telefone = cliente.telefone;


            return this;

        }
    }
}

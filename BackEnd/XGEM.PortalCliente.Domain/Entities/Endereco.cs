using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;
using System.Globalization;
using XGEM.PortalCliente.Domainl.Entities;

namespace XGEM.PortalCliente.Domain.Entities
{
    public class Endereco : EntityBase
    {

        public int id { get; set; }
        public string? endereco { get; set; }
        public string? complementoEndereco { get; set; }
        public int? numeroEndereco { get; set; }
        public string? cep { get; set; }
        public string? bairro { get; set; }
        public int? idEstado { get; set; }
        public string? nmUsuarioCadastro { get; set; }
        public DateTime? dtCadastro { get; set; }
        public string? nmUsuarioAlteracao { get; set; }
        public DateTime? dtAlteracao { get; set; }
        public int idCliente { get; set; }
        
    }
}

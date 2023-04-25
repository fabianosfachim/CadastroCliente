using XGEM.PortalCliente.Domain.Entities;

namespace XGEM.PortalCliente.Domain.Model
{
    public class EnderecoResponse
    {

        public List<Endereco> enderecos { get; set; }
        public Endereco objEndereco { get; set; }
        public bool Executado { get; set; }
        public string MensagemRetorno { get; set; }
    }
}

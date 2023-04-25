using XGEM.PortalCliente.Domain.Entities;

namespace XGEM.PortalCliente.Domain.Model
{
    public class LoginResponse
    {
        public LoginModel loginModel { get; set; }
        public bool Executado { get; set; }
        public string MensagemRetorno { get; set; }
    }
}

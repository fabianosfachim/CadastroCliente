using XGEM.PortalCliente.Domainl.Entities;

namespace XGEM.PortalCliente.Domain.Entities
{
    public class Estado : EntityBase
    {
        public int id { get; set; }
        public string? nomeEstado { get; set; }
        public string? siglaEstado { get; set; }
    }
}

using XGEM.PortalCliente.Data.Interfaces;
using XGEM.PortalCliente.Domain.Entities;

namespace XGEM.PortalCliente.Data.Repositories.Entities
{
    public class ClienteRepository : EntityBaseRepository<Cliente>, IClienteRepository

    {
        private readonly ApplicationContext _db;
        public ClienteRepository(ApplicationContext context) : base(context)
        {
            _db = context;
        }
    }
}

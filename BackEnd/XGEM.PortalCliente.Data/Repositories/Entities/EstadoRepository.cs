using XGEM.PortalCliente.Data.Interfaces;
using XGEM.PortalCliente.Domain.Entities;

namespace XGEM.PortalCliente.Data.Repositories.Entities
{
    public class EstadoRepository : EntityBaseRepository<Estado>, IEstadoRepository

    {
        private readonly ApplicationContext _db;
        public EstadoRepository(ApplicationContext context) : base(context)
        {
            _db = context;
        }
    }
}

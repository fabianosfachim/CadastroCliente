using XGEM.PortalCliente.Data.Interfaces;
using XGEM.PortalCliente.Domain.Entities;


namespace XGEM.PortalCliente.Data.Repositories.Entities
{
    public class EnderecoRepository : EntityBaseRepository<Endereco>, IEnderecoRepository

    {
        private readonly ApplicationContext _db;
        public EnderecoRepository(ApplicationContext context) : base(context)
        {
            _db = context;
        }
    }
}

using System.Threading.Tasks;
using Application.Entities;

namespace Application.Interfaces
{
    public interface IStatementRepository : IAsyncRepository<Statement>
    {
        Task<Statement> GetByUserId(int userId);
    }
}
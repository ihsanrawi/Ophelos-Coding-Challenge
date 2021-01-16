using System;
using System.Threading.Tasks;
using Application.Entities;
using Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    public class StatementController : BaseApiController
    {
        private readonly IStatementRepository _statementRepository;
        private readonly IAsyncRepository<Rating> _ratingRepository;

        public StatementController(IStatementRepository statementRepository
            , IAsyncRepository<Rating> ratingRepository)
        {
            _statementRepository = statementRepository;
            _ratingRepository = ratingRepository;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Statement request)
        {
            var createdIeStatement = await _statementRepository.AddAsync(request);
            return Ok(createdIeStatement);
        }
        
         [HttpGet("rating/{userId}")]
         public async Task<IActionResult> GetRating(int userId)
         {
             var statement = await _statementRepository.GetByUserId(userId); 
             
             if (statement == null)
             {
                 return BadRequest();
             }
             
             var totalIncome = statement.Salary + statement.Other;
             var totalExpenditure = statement.Mortgage + statement.Rent + statement.Utilities
                                    + statement.Travel + statement.Loans + statement.Cards;

             var disposableIncome = totalIncome - totalExpenditure;
             var ieRatio = totalIncome == 0 ? 0 :  Math.Round((totalExpenditure / totalIncome) * 100, 2);

             string ieRating;

             if (ieRatio < 10)
             {
                 ieRating = "A";
             }
             else if (10 <= ieRatio && ieRatio < 30 )
             {
                 ieRating = "B";
             } 
             else if (30 < ieRatio && ieRatio <= 50 )
             {
                 ieRating = "C";

             }
             else
             {
                 ieRating = "D";
             }
             
             var rating = new Rating
             {
                 DisposableIncome =  disposableIncome,
                 IeRating = ieRating,
                 IeRatio = ieRatio,
                 UserId = userId,
             };

             var result = await _ratingRepository.AddAsync(rating);

             var response = new RatingViewModel
             {
                 DisposableIncome = result.DisposableIncome,
                 IeRating = result.IeRating,
                 IeRatio = result.IeRatio
             };
             
             return Ok(response);
         }
    }

    public class RatingViewModel
    {
        public double DisposableIncome { get; set; }
        public string IeRating { get; set; }
        public double IeRatio { get; set; }
    }
}
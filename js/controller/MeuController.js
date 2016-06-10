
myApp.controller('MeuController', function($scope){
		
	$scope.pessoa = {};//{id: 0,nome:"",telefone:"",email:""};
	$scope.isEdit =false;
	
	$scope.dados = [{ 
			id: 1,
			nome: 'Caluan Baierle',
			telefone : '(46)9975-4486',
			email: 'caluan.baierle@gmail.com'
		},{
			id:2,
			nome: 'Joao zinho',
			telefone : '(46)1234-4123',
			email: 'Joao.zinho@gmail.com'
		} ,{
			id:3,
			nome: 'euclides zinho',
			telefone : '(46)1234-1233',
			email: 'euclides.zinho@gmail.com'
		} ]

		$scope.maxid = $scope.dados.length+1;
		$scope.showErro = function(descricao){
			swal("Atenção ", "Informe o "+descricao+" ", "warning");
		}

		//console.log($scope.dados);

		$scope.cadastrar1 = function(pessoa){
			



			if((pessoa.nome.length <2)){
				swal("Atenção ", "O nome deve ser maior que duas letras", "warning");
			}else if(pessoa.email.length < 7){
				swal("Atenção ", "Email Muito curto ", "warning");
			}else if((pessoa.telefone.length < 4)){
				swal("Atenção ", "Telefone cadastrado incorretamente", "warning");
			}else{
				if($scope.isEdit){
					console.log("atualianzo");
					for (var x = 0; x < $scope.dados.length; x++) {
		                var obj = $scope.dados[x];
		                if ((obj.id == pessoa.id)) {
		                   $scope.dados[x] = angular.copy(pessoa);
		                   	swal(pessoa.nome+" ", "Atualizado com sucesso!", "success");
		                   	break;
	                	}
	            	}
					$scope.dados[pessoa.id-1] = angular.copy(pessoa);
					$scope.isEdit =false;
					$scope.pessoa = {id: 0,nome:"",telefone:"",email:""};
				}else{
					var dado = pessoa;
					dado.id = $scope.maxid++;
					$scope.dados.push(angular.copy(dado));
					console.log($scope.dados);
					swal(pessoa.nome+" ", "Cadastrado com sucesso!", "success");
					$scope.pessoa = {id: 0,nome:"",telefone:"",email:""};

				}
			}

		}


	$scope.excluirDados = function(item){
		$scope.dados.splice(item,1);
		console.log("Excluir");
		swal("Deletado", "Cadastrado Deletado com sucesso!", "success");
	}	

	$scope.editarDado = function(item, idx){
		$scope.pessoa = angular.copy(item);
		$scope.isEdit =true;

	}

	$scope.limpaCampos = function(){
		$scope.pessoa = {};
		$scope.isEdit =false;

	}

})